export default function Loading() {
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
            <div className="text-center">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-20 h-20 border-8 border-zinc-800 rounded-full" />
                        <div className="absolute top-0 left-0 w-20 h-20 border-8 border-transparent border-t-violet-500 border-r-fuchsia-500 rounded-full animate-spin" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-white">Getting everything ready</h2>
                    <p className="text-zinc-500">This would not take long ok</p>
                </div>
            </div>
        </div>
    );
}