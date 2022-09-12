import React, { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  return (
    <div className="w-full px-4 text-gray-700 antialiased">
      {props.meta}

      <div className="relative z-30 mx-auto max-w-screen-md">
        <div className="flex flex-col justify-center items-center pt-16 pb-8">
          <Link href={'/'} passHref>
            <figure className="h-32 w-32 rounded-full overflow-hidden group">
              <img
                src={`${router.basePath}/assets/images/profile.jpeg`}
                alt="CristhGunners"
                className="mx-auto mb-4 block scale-100 cursor-pointer grayscale transition-transform group-hover:scale-105"
              />
            </figure>
          </Link>
          <Link href={'/'} passHref>
            <h1 className="text-center text-4xl font-extrabold tracking-tight text-black cursor-pointer hover:underline">
              {AppConfig.title}
            </h1>
          </Link>
          <h2 className="text-center text-xl">{AppConfig.description}</h2>
        </div>

        <div className="py-8 text-xl">{props.children}</div>

        <footer className="py-8">
          <nav className="flex items-center justify-center space-x-6">
            <a href={AppConfig.github_url} target="_blank" rel="noreferrer">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform hover:scale-105"
                fill="#333"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
            </a>
            <a href={AppConfig.dribbble_url} target="_blank" rel="noreferrer">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ea4c89"
                className="h-6 w-6 transition-transform hover:scale-105"
              >
                <title>Dribbble icon</title>
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
            </a>
            <a href={AppConfig.behance_url} target="_blank" rel="noreferrer">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 485 485"
                // style="enable-background:new 0 0 485 485;"
                xmlSpace="preserve"
                className="h-6 w-6 transition-transform hover:scale-105"
                fill="#1769ff"
              >
                <g>
                  <path
                    d="M204.235,334.302c8.256-2.17,15.627-5.503,22.044-10.048c6.366-4.505,11.532-10.343,15.326-17.546
		c3.758-7.113,5.64-15.574,5.64-25.399c0-12.122-2.881-22.46-8.766-31.101c-5.856-8.583-14.686-14.618-26.613-18.045
		c8.759-4.142,15.312-9.477,19.773-15.98c4.426-6.513,6.639-14.661,6.639-24.414c0-9.017-1.48-16.644-4.434-22.734
		c-3.025-6.182-7.249-11.09-12.645-14.78c-5.482-3.689-11.971-6.38-19.572-7.993c-7.645-1.656-16.008-2.458-25.277-2.458H85v193.759
		h93.915C187.595,337.564,196.074,336.472,204.235,334.302z M127.665,176.809h39.913c3.772,0,7.458,0.269,10.972,0.956
		c3.578,0.614,6.661,1.753,9.391,3.402c2.752,1.584,4.929,3.847,6.574,6.739c1.589,2.892,2.379,6.618,2.379,11.126
		c0,8.119-2.379,14.04-7.286,17.621c-4.957,3.639-11.216,5.432-18.774,5.432h-43.168V176.809z M127.665,304.563v-53.356h46.379
		c9.183,0,16.648,2.112,22.245,6.358c5.59,4.308,8.399,11.396,8.399,21.383c0,5.094-0.826,9.312-2.55,12.559
		c-1.717,3.276-4.081,5.852-6.934,7.731c-2.853,1.954-6.237,3.276-10.052,4.11c-3.758,0.841-7.753,1.214-11.963,1.214H127.665z"
                  />
                  <path
                    d="M279.111,320.797c6.272,6.517,13.73,11.518,22.654,15.085c8.931,3.524,18.875,5.313,29.926,5.313
		c15.857,0,29.466-3.632,40.624-10.921c11.287-7.257,19.564-19.313,25.018-36.202h-33.935c-1.315,4.343-4.713,8.525-10.296,12.437
		c-5.633,3.916-12.351,5.881-20.125,5.881c-10.807,0-19.148-2.834-24.917-8.471c-5.792-5.636-9.542-16.137-9.542-27.227h101.237
		c0.726-10.885-0.157-21.282-2.68-31.234c-2.544-9.969-6.611-18.857-12.33-26.628c-5.719-7.785-12.998-14.004-21.878-18.592
		c-8.91-4.652-19.307-6.937-31.176-6.937c-10.749,0-20.456,1.911-29.258,5.709c-8.802,3.811-16.36,9.031-22.733,15.645
		c-6.359,6.578-11.194,14.421-14.694,23.509c-3.427,9.057-5.18,18.857-5.18,29.348c0,10.849,1.689,20.861,5.037,29.905
		C268.247,306.51,272.996,314.249,279.111,320.797z M300.278,243.159c0.984-3.502,2.68-6.778,5.166-9.883
		c2.5-3.054,5.77-5.648,9.757-7.731c4.081-2.112,9.175-3.147,15.332-3.147c9.463,0,17.223,2.741,21.8,7.81
		c4.598,5.108,7.961,12.372,8.881,22.198h-62.697C298.697,249.669,299.287,246.572,300.278,243.159z"
                  />
                  <rect x="290.636" y="156.802" width="78.54" height="19.12" />
                  <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </nav>
          <div className="mt-8 text-center text-sm">
            © Copyright {new Date().getFullYear()}{' '}
            <Link href={'/about'} passHref>
              <span className="hover:text-black cursor-pointer">
                {AppConfig.title}
              </span>
            </Link>
            .
          </div>
        </footer>
      </div>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed -top-16 -right-16 z-20 h-32 w-32 opacity-50 blur-3xl md:h-64 md:w-64 md:scale-150"
      >
        <circle cx="50" cy="50" r="50" fill="#0D47EB" />
      </svg>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed -bottom-16 -left-16 z-20 h-32 w-32 opacity-50 blur-3xl md:h-64 md:w-64 md:scale-150"
      >
        <circle cx="50" cy="50" r="50" fill="#DD34AF" />
      </svg>
      <div className="fixed inset-0 z-10 h-screen w-full scale-150 bg-white blur-3xl"></div>
    </div>
  );
};

export { Main };
