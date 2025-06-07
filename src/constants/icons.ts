import ReactIcon from "@/components/icons/react.svg";
import NextJsIcon from "@/components/icons/nextjs.svg";
import JestIcon from "@/components/icons/jest.svg";
import MongoDbIcon from "@/components/icons/mongo.svg";
import TailwindIcon from "@/components/icons/tailwind.svg";
import GitIcon from "@/components/icons/git.svg";
import GithubIcon from "@/components/icons/github.svg";
import HTMLIcon from "@/components/icons/html.svg";
import JsIcon from "@/components/icons/js.svg";
import CssIcon from "@/components/icons/css.svg";
import tsIcon from "@/components/icons/ts.svg";
import ReduxIcon from "@/components/icons/redux.svg";
import NodeIcon from "@/components/icons/node.svg";



export abstract class TechStackIcons {
  public static REACT = ReactIcon;
  public static NextJsIcon = NextJsIcon;
  public static JestIcon = JestIcon;
  public static MongoDbIcon = MongoDbIcon;
  public static TailwindIcon = TailwindIcon;
  public static GitIcon = GitIcon;
  public static GithubIcon = GithubIcon;
  public static HTMLIcon = HTMLIcon;
  public static JsIcon = JsIcon;
  public static CssIcon = CssIcon;
  public static tsIcon = tsIcon;
  public static ReduxIcon = ReduxIcon;
  public static NodeIcon = NodeIcon;


  public static getIcons(count?: number): { icon: string, name: string, invert: boolean }[] {

    return [
      { icon: TechStackIcons.REACT, name: "react", invert: false },
      { icon: TechStackIcons.NextJsIcon, name: "nextjs", invert: true },
      { icon: TechStackIcons.JestIcon, name: "jest", invert: false },
      { icon: TechStackIcons.MongoDbIcon, name: "mongodb", invert: false },
      { icon: TechStackIcons.TailwindIcon, name: "tailwind", invert: false },
      { icon: TechStackIcons.GitIcon, name: "git", invert: false },
      { icon: TechStackIcons.GithubIcon, name: "github", invert: true },
      { icon: TechStackIcons.HTMLIcon, name: "html", invert: false },
      { icon: TechStackIcons.JsIcon, name: "javastrcipt", invert: false },
      { icon: TechStackIcons.CssIcon, name: "css", invert: false },
      { icon: TechStackIcons.tsIcon, name: "typescript", invert: false },
      { icon: TechStackIcons.ReduxIcon, name: "redux", invert: false },
      { icon: TechStackIcons.NodeIcon, name: "node", invert: false },
    ].splice(count ?? 13);
  }
}
