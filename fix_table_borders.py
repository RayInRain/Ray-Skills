"""为 DOCX 文件中所有表格添加完整边框"""
from docx import Document
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.shared import Pt

def set_cell_border(cell, **kwargs):
    """
    为单元格设置边框
    kwargs: top, bottom, left, right, insideH, insideV
    每项值为 dict，例如 {"sz": 6, "val": "single", "color": "000000"}
    """
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()

    tcBorders = tcPr.find(qn("w:tcBorders"))
    if tcBorders is None:
        tcBorders = OxmlElement("w:tcBorders")
        tcPr.append(tcBorders)

    for edge, attrs in kwargs.items():
        tag = qn(f"w:{edge}")
        element = tcBorders.find(tag)
        if element is None:
            element = OxmlElement(f"w:{edge}")
            tcBorders.append(element)
        element.set(qn("w:val"), attrs.get("val", "single"))
        element.set(qn("w:sz"), str(attrs.get("sz", 6)))
        element.set(qn("w:color"), attrs.get("color", "000000"))
        element.set(qn("w:space"), "0")


def add_borders_to_all_tables(docx_path, output_path=None):
    doc = Document(docx_path)
    border_attrs = {"val": "single", "sz": 6, "color": "000000"}

    table_count = 0
    for table in doc.tables:
        table_count += 1
        for row in table.rows:
            for cell in row.cells:
                set_cell_border(
                    cell,
                    top=border_attrs,
                    bottom=border_attrs,
                    left=border_attrs,
                    right=border_attrs,
                    insideH=border_attrs,
                    insideV=border_attrs,
                )

    out = output_path or docx_path
    doc.save(out)
    print(f"完成：处理了 {table_count} 个表格，已保存到 {out}")


if __name__ == "__main__":
    src = r"C:\Users\p3an0\Desktop\AI_Tools\6.hardwareSpec\电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.docx"
    add_borders_to_all_tables(src)
