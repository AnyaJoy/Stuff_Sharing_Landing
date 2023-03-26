import React from 'react'

function Description() {
  return (
    <div className="md:px-40 px-10 w-screen md:py-32 py-20 content-center bg-orange-bg text-white text-2xl">
      <p className="mb-8">
        <span className="font-bold">Stuff Sharing</span> is an online platform
        for sharing and borrowing things that are essential to have on hand, but
        rarely used in a day to day life.
      </p>
      <p className="mb-8">
        The idea was born among the community of travelers from Israel. We would
        constantly borrow hiking gear, wetsuits, gadgets, bikes and many other
        things, which would not make sense to be bought for a one-time or rather
        rare experience.
      </p>
      <p>
        With <span className="font-bold">Stuff Sharing</span> we make it
        possible to use things without needing to buy them, and also earn by
        sharing our own.
      </p>
    </div>
  );
}

export default Description