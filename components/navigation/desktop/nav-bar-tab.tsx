import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

interface NavBarTabProps {
  path: string;
  label: string;
}

export const NavBarTab: React.FC<NavBarTabProps> = ({ path, label }) => {
  const router = useRouter();
  const isRouteActive = (path: string) => router.pathname === path;

  let navBarTabClassName = "nav-bar__tab";

  if (isRouteActive(path)) {
    navBarTabClassName += " nav-bar__tab--active";
  }

  return (
    <Link href={path} className={navBarTabClassName}>
      {label}
    </Link>
  );
};
