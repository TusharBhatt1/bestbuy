import Product from "./Product";

export default function page({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div className="flex flex-col">
      <div>
        <p className="text-sm text-italic text-slate-400">
          Elevate Your Style 🌟
        </p>
        <Product id={id} />
      </div>
    </div>
  );
}
