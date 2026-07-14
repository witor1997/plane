import Link from "next/link";
import torurist from "@/lib/tourist";

export default function TouristList() {
  return (
    <div>
{torurist.map((tourist) => (
    <div key={tourist.id} style={{ marginBottom: "20px" }}>
      <Link href={`/tourist/${tourist.id}`}>
<a style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img
         src={tourist.imageUrl}
         alt={tourist.name}
         width={100}
         height={100}
         style={{ width: "100px", height: "100px", marginRight: "10px" }}   
        />     
        <div>
            <h3> {tourist.name} </h3>
            <p> {tourist.location} </p>
        </div>
</a>
</Link>     
</div>
))}
    </div>
  );
}        
      


