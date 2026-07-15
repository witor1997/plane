import Title from "@/components/Title";
import Grid from "@/components/Grid";
import tourist from "@/lib/tourist";

export default function Home() {
  return (
    <>
      <Title title="tourist BH melhor do turismo" />
      <Grid tourist={tourist} />
    </>
  );
}
