import Title from "@/componets/Title";
import Grid from "@/componets/Grid";
import tourist from "@/lib/tourist";

export default function Home() {
  return (
    <>
      <Title title="tourist BH melhor do turismo" />
      <Grid tourist={tourist} />
    </>
  );
}
