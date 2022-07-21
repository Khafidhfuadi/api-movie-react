import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full #1a1c2d shadow">
      ini navbar
    </nav>
  );
}
