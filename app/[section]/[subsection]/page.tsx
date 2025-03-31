export default function SubsectionPage({
    params,
}: {
    params: { section: string; subsection: string };
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl font-bold">
                                {params.subsection.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Subsection {params.subsection.toUpperCase()}
                            </h1>
                            <p className="text-gray-600">Section: {params.section}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to this subsection. Here you can find detailed information about {params.subsection.toUpperCase()}.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}