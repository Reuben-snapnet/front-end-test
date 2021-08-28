import { useRouter } from 'next/router'

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className="flex justify-between items-center space-x-7 text-4xl font-bold">
            <div className="hover:text-gray-500 cursor-pointer" onClick={() => router.push('/')}>Events</div>
            <h1>|</h1>
            <div className="hover:text-gray-500 cursor-pointer" onClick={() => router.push('/about')}>About</div>
        </div>
    )
}