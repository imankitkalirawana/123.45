import { Button, Image } from '@nextui-org/react';

export default function Hero1() {
  return (
    <>
      <div className="flex items-center gap-24 p-12 py-16">
        <div className="w-1/2 flex-1">
          <Image
            width={800}
            height={400}
            alt="NextUI hero Image with delay"
            src="https://app.requestly.io/delay/"
            isLoading
            className="aspect-[7/5] w-full"
            radius="none"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="text-6xl">
            Perfect sound <br /> immersive world
          </h3>
          <p className="text-lg">
            QuietComfort 35 wireless headphones II are engineered with renowned
            noise cancellation. With the Google Assistant and Amazon Alexa
            built-in, you have instant access to millions of songs, playlists
            and more—hands free.
          </p>
          <div className="flex justify-end">
            <Button radius="full" className="px-8" color="primary">
              EXPLORE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
