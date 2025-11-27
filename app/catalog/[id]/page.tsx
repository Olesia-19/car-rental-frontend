import { getCarById } from "@/lib/api/serverApi";
import css from "./CarDetailsPage.module.css";
import Image from "next/image";
import CarBookingForm from "@/components/BookingForm/BookingForm";
import CarDetailsInfo from "@/components/CarDetailsInfo/CarDetailsInfo";

type CarDetailsPageProps = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;
  if (!id) {
    return <div>Car ID is missing</div>;
  }

  const car = await getCarById(id);

  return (
    <div className={css.container}>
      <div className={css.left}>
        <Image
          src={car.img}
          alt={car.brand}
          width={640}
          height={512}
          className={css.image}
          // decoding="async"
          loading="eager"
        />
        <CarBookingForm carId={car.id} />
      </div>

      <div className={css.right}>
        <CarDetailsInfo car={car} />
      </div>
    </div>
  );
}
