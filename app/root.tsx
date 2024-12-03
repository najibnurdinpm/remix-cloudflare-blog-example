import type { ReactNode } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  useCatch,
  useMatches,
} from "@remix-run/react";

import type { GithubMdResponse, LoaderFunction } from "./types";


function Document({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>
        <Links />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@exampledev/new.css@1.1.3/new.css"
        />
      </head>
      <body>
        <header>
        <h1>Test heading</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
      <LiveReload />
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  return (
    <Document>
      <main>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
        <p>
          Try reloading the page or heading back <Link to="/">home</Link>.
        </p>
      </main>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document>
      <main>
        <h1>Oops, looks like something went wrong.</h1>
        <p>
          Try reloading the page or heading back <Link to="/">home</Link>.
        </p>
      </main>
    </Document>
  );
}
