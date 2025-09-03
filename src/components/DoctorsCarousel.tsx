"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Doctor {
  id: string;
  name: string;
  designation: string;
  image: string;
}

interface DoctorsCarouselProps {
  doctors: Doctor[];
}

export default function DoctorsCarousel({ doctors }: DoctorsCarouselProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {doctors.map((doctor) => (
            <CarouselItem key={doctor.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden group">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-primary transition-all">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                    <p className="text-primary">{doctor.designation}</p>
                    <Link to={`/doctors/${doctor.id}`}>
                      <button className="mt-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors">
                        View Profile
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}