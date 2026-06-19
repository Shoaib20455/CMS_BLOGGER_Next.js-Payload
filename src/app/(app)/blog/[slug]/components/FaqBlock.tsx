type Faq = {
  question: string;
  answer: Record<string, unknown>;
};

function resolveRoot(node: Record<string, unknown>): Record<string, unknown> {
  const root = node.root as Record<string, unknown> | undefined;
  return root?.type === "root" ? root : node;
}

export default function FaqBlock({ faqs }: { faqs: Faq[] }) {
  if (!faqs?.length) return null;

  return (
    <section>
      <h2 className="mb-10 text-center font-['Outfit'] text-[34px] font-bold leading-[42px] text-[#012F42] sm:text-[48px] sm:leading-[58px]">
        Frequently Asked Questions
      </h2>
      <div className="grid gap-5 lg:grid-cols-2">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="group rounded-[10px] border border-[rgba(17,24,39,0.50)] bg-white px-5 py-5 transition-all duration-300 hover:border-[#FE8F02] hover:shadow-[0_10px_24px_rgba(1,47,66,0.06)]"
          >
            <div className="flex min-h-[33px] items-center justify-between gap-5">
              <h3 className="font-['DM_Sans'] text-[18px] font-normal leading-[33px] text-[#012F42]">
                {faq.question}
              </h3>
              <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rounded bg-[#012F42]" />
                <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 rounded bg-[#012F42] transition-opacity group-hover:opacity-0" />
              </span>
            </div>
            <div className="mt-3 font-['DM_Sans'] text-[16px] leading-6 text-[rgba(17,24,39,0.70)] [&_p]:mb-2 [&_p:last-child]:mb-0">
              {renderLexical(faq.answer)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function renderLexical(node: unknown) {
  if (!node || typeof node !== "object") return <></>;

  const n = resolveRoot(node as Record<string, unknown>);

  if (n.type === "text") {
    return <>{String(n.text ?? "")}</>;
  }

  if (n.type === "paragraph") {
    return <p className="mb-2">{renderChildren(n.children)}</p>;
  }

  if (n.type === "heading" && (n.tag === "h2" || n.tag === "h3")) {
    const Tag = (n.tag as "h2" | "h3") || "h2";
    return <Tag>{renderChildren(n.children)}</Tag>;
  }

  if (n.type === "list") {
    const Tag = n.listType === "ordered" ? "ol" : "ul";
    const cls = n.listType === "ordered" ? "list-decimal" : "list-disc";
    return <Tag className={`ml-5 space-y-1 ${cls}`}>{renderChildren(n.children)}</Tag>;
  }

  if (n.type === "listitem") {
    return <li>{renderChildren(n.children)}</li>;
  }

  if (n.type === "quote") {
    return (
      <blockquote className="border-l-4 border-[#FE8F02] pl-4 italic text-gray-600">
        {renderChildren(n.children)}
      </blockquote>
    );
  }

  if (n.type === "textFormat" || n.format) {
    let el = <>{renderChildren(n.children)}</>;
    const fmt = Number(n.format) || 0;
    if (fmt & 1) el = <strong>{el}</strong>;
    if (fmt & 2) el = <em>{el}</em>;
    if (fmt & 8) el = <u>{el}</u>;
    if (fmt & 16) el = <s>{el}</s>;
    return el;
  }

  return <>{renderChildren(n.children)}</>;
}

function renderChildren(children: unknown) {
  if (!children) return <></>;
  const arr = Array.isArray(children) ? children : [children];
  return (
    <>
      {arr.map((child, i) => (
        <span key={i}>{renderLexical(child)}</span>
      ))}
    </>
  );
}
