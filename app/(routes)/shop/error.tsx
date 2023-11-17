'use client';

export default function ErrorShop({error}: {error: Error}) {
    // You can add any UI inside Loading, including a Skeleton.
    return <div>
        <div>Error...</div>
        <div>{error.message}</div>
    </div>
}
