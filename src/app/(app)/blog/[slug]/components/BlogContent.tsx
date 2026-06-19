import { Fragment } from "react";

export default function BlogContent({ data }: { data: unknown }) {
  if (!data) return null;

  const root = (data as Record<string, unknown>).root as Record<string, unknown> | undefined;

  return (
    <div className="font-['DM_Sans'] text-[17px] leading-[28px] text-[#575D67] sm:text-[18px] sm:leading-[30px] [&_a]:text-[#FE8F02] [&_a]:underline [&_a:hover]:text-[#E07D02] [&_em]:text-[#575D67] [&_ol]:mb-2 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-0 [&_p]:mb-1 [&_strong]:font-semibold [&_ul]:mb-2 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-0">
      {root ? renderNode(root) : null}
    </div>
  );
}

function renderNode(node: Record<string, unknown>) {
  if (!node || typeof node !== "object") return <></>;

  const children = (arr: unknown) => renderChildren(arr);

  switch (node.type) {
    case "root":
      return <>{children(node.children)}</>;

    case "heading": {
      const tag = (node.tag as string) || "h2";
      const text = extractText(node);
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      const styles = {
        h2: "mb-1 mt-2 scroll-mt-24 font-['DM_Sans'] text-[22px] font-semibold leading-[30px] text-[#012F42]",
        h3: "mb-1 mt-2 scroll-mt-24 font-['DM_Sans'] text-[22px] font-semibold leading-[30px] text-[#012F42]",
      } as Record<string, string>;
      const cls = styles[tag] || "";
      const Tag = tag as "h2" | "h3";
      return (
        <Tag id={id} className={cls}>
          {children(node.children)}
        </Tag>
      );
    }

    case "paragraph":
      return <p>{children(node.children)}</p>;

    case "text": {
      let el = <>{String(node.text ?? "")}</>;
      const fmt = Number(node.format) || 0;
      if (fmt & 1) el = <strong>{el}</strong>;
      if (fmt & 2) el = <em>{el}</em>;
      if (fmt & 8) el = <u>{el}</u>;
      if (fmt & 16) el = <s>{el}</s>;
      return el;
    }

    case "list": {
      const Tag = node.listType === "ordered" ? "ol" : "ul";
      const cls =
        node.listType === "ordered"
          ? "mb-1 ml-6 list-decimal"
          : "mb-1 ml-6 list-disc";
      return <Tag className={cls}>{children(node.children)}</Tag>;
    }

    case "listitem":
      return <li className="pl-1">{children(node.children)}</li>;

    case "quote":
      return (
        <blockquote className="my-5 rounded-r-[5px] border-l-4 border-[#FE8F02] bg-white py-3 pl-4 pr-4 italic text-[#575D67] shadow-[0_8px_20px_rgba(1,47,66,0.04)]">
          {children(node.children)}
        </blockquote>
      );

    case "link": {
      const href = String(node.url ?? "#");
      return (
        <a
          href={href}
          target={node.newTab ? "_blank" : undefined}
          rel={node.newTab ? "noopener noreferrer" : undefined}
        >
          {children(node.children)}
        </a>
      );
    }

    default:
      return <>{children(node.children)}</>;
  }
}

function renderChildren(children: unknown) {
  if (!children) return <></>;
  const arr = Array.isArray(children) ? children : [children];
  return (
    <>
      {arr.map((child, i) => (
        <Fragment key={i}>{renderNode(child as Record<string, unknown>)}</Fragment>
      ))}
    </>
  );
}

function extractText(node: Record<string, unknown>): string {
  if (node.type === "text") return String(node.text ?? "");
  if (Array.isArray(node.children)) {
    return node.children.map((c) => extractText(c as Record<string, unknown>)).join("");
  }
  return "";
}
