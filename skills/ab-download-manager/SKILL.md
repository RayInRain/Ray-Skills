---
name: ab-download-manager
description: 在 Windows 上用 AB Download Manager 提交、监控和验证 HTTP/HTTPS 下载。适用于用户指定 AB 下载，或需要处理大文件、慢速网络、续传及直连失败后的代理回退。
---

# AB Download Manager

取得下载 URL、绝对目标目录和文件名。用户指定 AB 时优先使用它。对约 100 MB 以上、网络慢或需要续传的文件，也优先使用 AB。以下命令适用于已配备 CLI 的 AB Download Manager 1.11.1，其他版本先查 `--help`。

## 提交和验证

先定位 CLI。常见本机安装位置为 `$env:LOCALAPPDATA\ABDownloadManager\ABDownloadManagerCli.exe`，也可用实际安装路径或 PATH 中的程序。若需启动 GUI，可从同一安装目录调用 `Start-Process -FilePath $abGui -WindowStyle Hidden`。1.11.1 的 `gui start-if-not-started` 发生 WMI 启动错误时可用这一方式启动。

```powershell
$abCli = Join-Path $env:LOCALAPPDATA 'ABDownloadManager\ABDownloadManagerCli.exe'
& $abCli download add http --link='<URL>' --folder='<绝对目标目录>' --name='<文件名>' --start
& $abCli download show <ID>
```

记录任务 ID，持续检查至任务结束。只有任务 JSON 的 `status` 为 `Completed` 且目标文件存在才报告完成。按用户要求或文件用途核对大小、压缩包完整性、哈希或签名。AB 接口不可用或提交失败时，核实是否已创建任务，再考虑其他下载方式，避免重复提交。

## 直连失败与代理回退

先直连。第一次失败后最多重试两次。若应用的 `config/appSettings.json` 中 `maxDownloadRetryCount` 已为 2，由 AB 完成内置重试，避免外层重复。用 `download show <ID>` 区分重试中与最终失败。

直连尝试耗尽后，只有已配置且可达的备用代理才可用于回退。1.11.1 的代理模式是全局设置，切换前检查是否有其他正在下载的任务，避免影响它们。若无法安全切换或代理不可用，报告实际状态。

1. 用 `gui exit` 正常退出 AB，确认进程退出。
2. 在实际配置目录的 `config/options/proxySettings.json` 中仅将 `proxyMode` 改为 `manual`，保留已有代理和其余设置。
3. 重新启动 AB，用 `download resume <ID>` 续传原任务，检查任务和文件。
4. 本次代理操作结束后退出 AB，恢复 `proxyMode` 为 `direct` 并重新启动。续传失败时也执行恢复，报告实际结果。

## 完成弹窗

用户指定的下载保留完成提示。助手为完成其他工作而下载的安装包、依赖或测试素材，在核实任务完成后，只关闭对应的完成弹窗。

通过 Windows API 枚举可见顶层窗口（`EnumWindows`、`IsWindowVisible`），用 `GetWindowThreadProcessId` 核实窗口属于 `ABDownloadManager.exe`，用 `GetWindowText` 将标题与已核实的辅助下载文件名精确匹配。仅在唯一匹配时发送 `PostMessage(hwnd, 0x0010, 0, 0)`，随后重新枚举确认窗口消失。零个或多个匹配时不发送消息。保留下载文件，不打开或运行文件，不结束 AB 进程，不改变全局提示设置，也不使用截图、鼠标或键盘模拟。
