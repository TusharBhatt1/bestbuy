import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const location = usePathname();
//   const pathnames = location.pathname.split("/").filter((x) => x);
console.log(location)
  let breadcrumbPath = "";

  // if (pathnames.length === 0) {
  //   // If the current route is the home route ('/'), do not render the breadcrumbs
  //   return null;
  // }

  return (
    <div className="breadcrumbs">
        <></>
      {/* <Link href="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        console.log(pathnames, breadcrumbPath);

        return isLast ? (
          <span key={breadcrumbPath}> / {name}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })} */}
    </div>
  );
};

export default Breadcrumbs;