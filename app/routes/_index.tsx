import type { V2_MetaFunction } from "@remix-run/node";
import amptLogo from "../../public/ampt.svg";
import "../styles.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ampt + Remix" },
    { name: "description", content: "Welcome to Remix on Ampt!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="column">
        <div className="circle">
          <svg width="150" height="150">
            <image href={amptLogo} x="0" y="0" width="150" height="150" />
          </svg>
        </div>
        <h5>Welcome to Remix on Ampt!</h5>
        <div style={{ marginTop: "25px" }} />
        <p>
          Run <p className="code">ampt dev</p> to start the development server
        </p>
        <p style={{ marginBottom: "10px" }}>
          Edit this page by modifying{" "}
          <p className="code">app/routes/_index.tsx</p>
        </p>
        <p>
          Deploy your changes by running <p className="code">build</p> in the
          Ampt shell to see your changes at your sandbox url
        </p>
        <div className="spacing" />
        <p>
          Run<p className="code">ampt deploy</p> to deploy to a stage
          environment
        </p>
        <div className="spacing" />
        <p style={{ marginBottom: "5px" }}>
          Learn more about Ampt by checking out our{" "}
          <a rel="noreferrer" href="https://getampt.com/docs" target="_blank">
            docs
          </a>
        </p>
        <p>
          Learn more about Remix by checking out their{" "}
          <a
            rel="noreferrer"
            href="https://remix.run/docs/en/main"
            target="_blank"
          >
            docs
          </a>
        </p>
      </div>
    </div>
  );
}

export const css = `
@keyframes GradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
