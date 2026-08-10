'use client';

import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';

const LandMasses = () => (
  <>
    <path d="M8 27c9-14 23-20 35-15 7 3 10 10 18 12 7 2 15-2 20 3 4 5-1 11-7 15-6 5-14 7-18 15-3 6 2 12-1 18-3 7-11 10-17 5-7-6-7-16-12-22-5-6-12-8-19-10-9-2-19-9-25-11-7-3-14-1-18-8-4-8 0-18-8-25-8-7-22-12-24-24-2-12 10-22 11-33 1-6-1-13-3-18-1-6 0-12 5-16 5-4 13-4 17-9 4-4 3-11-2-15-6-6-14-8-20-5-5 2-8 8-13 8-6 1-11-5-10-11 1-8 10-13 18-11 8 1 13 8 21 9 9 2 20-2 27-8Z" />
    <path d="M109 16c8-7 20-8 27-2 5 4 5 10 11 13 7 4 17 1 22 7 6 7 1 17-5 22-7 6-16 8-20 17-4 10 1 22-5 30-6 8-19 7-27 2-9-6-17-16-15-27 2-9 10-15 10-24 0-8-6-14-7-22-1-6 3-12 9-16Z" />
    <path d="M72 83c6-3 15-2 19 4 4 7-2 15-7 20-5 6-14 9-20 4-7-5-4-15 1-21 2-3 4-6 7-7Z" />
  </>
);

export default function CatGlobeMascot() {
  return (
    <div
      className="cat-globe-mascot"
      role="img"
      aria-label="An anime-style silver cat licking a rotating Earth"
    >
      <div className="cat-globe-orbit" aria-hidden="true" />

      <div className="cat-globe-earth" aria-hidden="true">
        <svg
          className="cat-globe-map"
          viewBox="0 0 360 120"
          preserveAspectRatio="none"
        >
          <g className="cat-globe-land">
            <LandMasses />
          </g>
          <g className="cat-globe-land" transform="translate(180 0)">
            <LandMasses />
          </g>
          <g className="cat-globe-clouds">
            <path d="M16 39c15-7 25 1 38-2 12-3 20-11 34-6" />
            <path d="M104 65c12-7 23-4 32 1 10 5 18 3 29-2" />
            <path d="M196 39c15-7 25 1 38-2 12-3 20-11 34-6" />
            <path d="M284 65c12-7 23-4 32 1 10 5 18 3 29-2" />
          </g>
        </svg>
        <span className="cat-globe-shine" />
      </div>

      <div className="cat-globe-cat" aria-hidden="true">
        <Image
          src={withBasePath('/mascot/silver-cat-licking.png')}
          alt=""
          width={960}
          height={640}
          sizes="320px"
          className="cat-globe-cat-image"
        />
      </div>
    </div>
  );
}
