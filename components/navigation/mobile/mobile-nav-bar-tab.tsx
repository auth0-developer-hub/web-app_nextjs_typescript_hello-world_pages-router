import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

interface MobileNavBarTabProps {
  path: string;
  label: string;
  handleClick: () => void;
}

export const MobileNavBarTab: React.FC<MobileNavBarTabProps> = ({
  path,
  label,
  handleClick,
}) => {
  const router = useRouter();
  const isRouteActive = (path: string) => router.pathname === path;

  let mobileNavBarTabClassName = "mobile-nav-bar__tab";

  if (isRouteActive(path)) {
    mobileNavBarTabClassName += " mobile-nav-bar__tab--active";
  }

  return (
    <Link
      href={path}
      className={mobileNavBarTabClassName}
      onClick={handleClick}
    >
      <div>{label}</div>
    </Link>
  );
};
