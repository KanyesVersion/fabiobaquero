const VideoPlayer = ({ videoId }) => {
  return (
    <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full aspect-square md:aspect-auto md:w-[1024px] md:h-[576px] mx-auto md:mb-8 shadow-md"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  )
}

export default VideoPlayer