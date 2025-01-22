import { createClient } from "@/lib/supabase/server";
import Card from "@/components/card";
import Link from "next/link";
import "./page.scss";

export default async function Resources({ params, searchParams }) {
  let { page = 1 } = await searchParams;
  page = +page;
  const supabase = await createClient();
  const itemsPerPage = 16;
  const {
    data: resources,
    count,
    error,
  } = await supabase
    .from("resources")
    .select("*", { count: "exact" })
    .order("id", { ascending: true })
    .range((page - 1) * itemsPerPage, page * itemsPerPage - 1);

  const totalPages = count ? Math.ceil(count / itemsPerPage) : 0;

  return (
    <>
      <div className="resources_9_2">
        <div className="header_40_16">
          <div className="resources_40_14">
            <span className="resources">Resources</span>
          </div>
        </div>

        <div className="resourceList_40_17">
          {resources.map((item, index, dataSource) => {
            return <Card className="card_92_13" title={item.name} href="" />;
          })}
        </div>

        <div className="pager_41_80">
          <div className="page1_42_82">
            <span className="page1Of10">Page 1 of 10</span>
          </div>

          <div className="frame2_42_83">
            <div className="frame3_42_89">
              {page > 1 && (
                <Link
                  className="prev_42_84"
                  href={`/?page=${page - 1}`}
                  style={{ opacity: page <= 1 ? 0.5 : 1 }}
                >
                  <div className="previous_42_86">
                    <span className="previous">Previous</span>
                  </div>
                </Link>
              )}
              {totalPages > page && (
                <Link
                  className="next_42_85"
                  href={`/?page=${page + 1}`}
                  style={{ opacity: page >= totalPages ? 0.5 : 1 }}
                >
                  <div className="next_42_88">
                    <span className="next">Next</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
