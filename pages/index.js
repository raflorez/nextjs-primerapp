import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Hola</h1>
      <ul>
        <li>
          <Link href="/blog">
            <a>Hola buenas</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
