import Link from "next/link";
import "./layout.scss";
import * as fonts from "@/app/fonts.js";
import "@/app/reset.css";
import "@/app/global.css";

const fontVariableClasses = Object.values(fonts)
  .map((font) => font.variable)
  .join(" ");

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontVariableClasses}`}>
      <body className="rootLayout_146_38">
        <div className="header_146_39">
          <div className="logo_146_41">
            <Link className="keyx_146_43" href="/">
              <span className="keyx">keyx</span>
            </Link>
          </div>

          <div className="menu_146_42"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
