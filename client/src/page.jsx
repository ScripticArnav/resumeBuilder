// App.js
import React from 'react';
import Button from './components/Button';

const Page = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button
        color="primary"
        className='btn-xs sm:btn-sm md:btn-md lg:btn-lg'
        size="lg"
        onClick={() => alert('Primary Button Clicked!')}
      >
        Primary Button
      </Button>

      <Button
        color="secondary"
        size="md"
        className="btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => alert('Secondary Button Clicked!')}
      >
        Secondary Button
      </Button>

      <Button
        color="accent"
        className="btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        size="sm"
        onClick={() => alert('Accent Button Clicked!')}
      >
        Accent Button
      </Button>

      <Button
        disabled
        color="primary"
        className='btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-wide'
        size="md"
      >
        Disabled Button
      </Button>
    </div>
  );
};

export default Page;
