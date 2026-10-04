export default function ChatPreview() {
  return (
    <div className="preview" id="preview">
      <div className="preview-bar"><i /><i /><i /></div>
      <div className="preview-body">
        <aside className="preview-side">
          <div className="pv-line w60" /><div className="pv-line w80" />
          <div className="pv-line w50" /><div className="pv-line w70" />
        </aside>
        <div className="preview-main">
          <div className="pv-msg user">Tóm tắt biến động doanh thu và lợi nhuận trong báo cáo Q2.</div>
          <div className="pv-msg bot">
            Doanh thu tăng 12% so với cùng kỳ, biên lợi nhuận gộp cải thiện nhờ chi phí nguyên liệu giảm...
          </div>
          <div className="pv-input">Tải lên báo cáo hoặc đặt câu hỏi...</div>
        </div>
      </div>
    </div>
  );
}
