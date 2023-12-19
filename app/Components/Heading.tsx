interface HeadingProps{
    title:string,
    subtitle?:string
}

export default function Heading({
title,
subtitle
}:HeadingProps) {
  return (
    <div>
       <h1
       className="font-bold text-center text-lg sm:text-2xl"
       >
        {title}
       </h1>
       <p
        className="text-slate-400 text-center text-md"
       >{subtitle}</p>
    </div>
  )
}
