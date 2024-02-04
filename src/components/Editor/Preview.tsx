"use client";
import createDOMPurify from "dompurify";

const RichContentPreview = (props: { html: string }) => {
  const { html } = props;

  if (window === undefined) return <></>;

  const DOMPurify = createDOMPurify(window);

  return (
    <div
      className="editor"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};
export default RichContentPreview;
