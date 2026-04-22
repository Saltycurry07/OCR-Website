# OCR-Website

一个用于“发票中文手写内容提取 + Word 导出”的网站。

## 功能
- 上传发票照片（JPG/PNG）
- 自动OCR识别
- 尽可能过滤打印体，仅保留手写内容
- 按阅读顺序排版输出 `.docx`

## 技术栈
- FastAPI
- PaddleOCR（中文 + 角度分类）
- OpenCV（预处理增强）
- python-docx（Word导出）

## 运行
```bash
pip install -r requirements.txt
python app.py
```

浏览器打开：`http://127.0.0.1:8000`

## 接口
- `GET /`：上传页面
- `POST /api/extract`：上传图片并返回 `手写识别结果.docx`

## 精度建议
- 拍摄时保持纸张平整、光照均匀
- 尽量正对拍摄，减少透视变形
- 手写内容清晰、不要严重反光
