"use client"

import { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  FadeIn,
  SlideIn,
} from "@/components/framer-animations"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { doctorsService } from "@/services/doctorsService";
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from "@/store/features/doctorsSlice";
import { toast } from "react-hot-toast";
import DoctorCard from "../DoctorCard";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ScaleOnHover } from "../framer-animations";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export default function DoctorsSection() {
    const dispatch = useAppDispatch();
    const { doctors, isLoading, error, lastFetched } = useAppSelector(
        (state) => state.doctors
    );

    useEffect(() => {
        const fetchDoctors = async () => {
            if (
                doctors.length > 0 &&
                lastFetched &&
                Date.now() - lastFetched < CACHE_DURATION
            ) {
                return; // Use cached data
            }

            dispatch(fetchDoctorsStart());
            try {
                const data = await doctorsService.getAllActiveDoctors();
                dispatch(fetchDoctorsSuccess(data));
            } catch (err) {
                const errorMessage =
                    err instanceof Error ? err.message : "Failed to fetch doctors";
                dispatch(fetchDoctorsFailure(errorMessage));
                toast.error(errorMessage);
            }
        };

        fetchDoctors();
    }, [dispatch, doctors.length, lastFetched]);

    return (
        <section id="doctors" className="py-20">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">
                            Meet Our Experts
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Experienced Ayurvedic Practitioners</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Our team of certified Ayurvedic doctors brings decades of experience in traditional healing practices
                            and modern wellness approaches.
                        </p>
                    </div>
                </FadeIn>

                <SlideIn direction="bottom" delay={0.2}>
                    <div className="relative max-w-6xl mx-auto">
                        {isLoading && <p>Loading doctors...</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        {!isLoading && !error && (
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {doctors.map((doctor) => (
                                        <CarouselItem key={doctor._id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                            <DoctorCard doctor={doctor} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="hidden md:flex -left-12 bg-accent/10 border-accent/20 hover:bg-accent hover:text-accent-foreground" />
                                <CarouselNext className="hidden md:flex -right-12 bg-accent/10 border-accent/20 hover:bg-accent hover:text-accent-foreground" />
                            </Carousel>
                        )}
                    </div>
                </SlideIn>

                <FadeIn delay={0.4}>
                    <div className="text-center mt-12">
                        <ScaleOnHover>
                            <a href="/doctors">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                                >
                                    View All Doctors
                                </Button>
                            </a>
                        </ScaleOnHover>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}