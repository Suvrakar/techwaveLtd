import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {
    const services = [
        {
            img: img,
            title: 'Web Development',
            description:
                'We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.',
        },
        {
            img: img2,
            title: 'Mobile App',
            description:
                'We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.',
        },
        {
            img: img3,
            title: 'AI development',
            description:
                'We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.',
        },
        {
            img: img4,
            title: 'General IT Consultations',
            description:
                'Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.',
        },
        {
            img: img4,
            title: 'Digital Marketing & Video Editing',
            description:
                'We deliver top-notch digital marketing strategies and professional video editing services to help your brand stand out in the digital space.',
        },
    ];

    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        We are deeply committed to the growth and success of our clients.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <img
                                            alt={service.title}
                                            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                            src={service.img}
                                        />
                                        <h2 className="font-semibold my-4 text-2xl text-center">{service.title}</h2>
                                        <p className="text-md font-medium">{service.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Add other sections below if needed */}
        </div>
    );
};

export default Services;
