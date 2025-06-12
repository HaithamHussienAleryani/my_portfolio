import { IdCardIcon, Link } from "lucide-react";

function CertificateItem({ item }: { item: any }) {
  return (
    <div className="flex w-full group/certificate  border-b-zinc-200 dark:border-b-zinc-600 pb-3 border-b-[1px] items-end justify-between  ">
      <div className="flex  space-x-4">
        <div className="rounded-full h-fit p-3 bg-primary/25">
          <IdCardIcon className="text-primary" />
        </div>
        <div>
          <a
            href={item.link}
            className="   flex flex-wrap items-center underline md:no-underline  w-full font-semibold"
          >
            {item.title}
            <Link className="size-4 hidden   md:flex  md:ms-2 text-primary" />
          </a>
          <span className="font-semibold text-sm text-muted-foreground">
            @{item.school}
          </span>
        </div>
      </div>

      <p className="text-sm">{item.date}</p>
    </div>
  );
}

export default CertificateItem;
