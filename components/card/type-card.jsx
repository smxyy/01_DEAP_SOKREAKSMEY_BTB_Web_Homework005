import { Card, CardHeader, Image } from '@heroui/react';

export default function TypeCard({content}) {
  return (
    <>
        <Card className="h-[400px] w-[270px] overflow-hidden relative">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <div className="py-1 px-2 bg-white font-medium flex gap-2 items-center rounded-full">
                    <content.icon color="var(--primary)" variant="Outline" size={18} />
                    <span className="text-[var(--primary)]">{content.title}</span>
                </div>
            </CardHeader>
            <Image
                removeWrapper
                alt = {content.title}
                className="z-0 w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                src={content.image}
            />
            <div className="absolute inset-0 bg-black/10 bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <span className="text-white text-2xl text-center text-pretty">{content.overview}</span>
            </div>
        </Card>
    </>
  )
}
