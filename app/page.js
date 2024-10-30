import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="font-extrabold text-2xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Human Detection Alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}