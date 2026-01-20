import MainLayout from "@/components/Layout/MainLayout";
import StepsLayout from "@/components/Layout/StepsLayout";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <MainLayout>
      <main>
        <StepsLayout>
          <Nav />
        </StepsLayout>
      </main>
    </MainLayout>
  );
}
