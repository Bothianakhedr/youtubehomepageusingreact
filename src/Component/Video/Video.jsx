import PropTypes from "prop-types";
export default function Video({ vid }) {
  console.log(vid);

  return (
    <div className="w-[32%] mb-4 rounded-2xl">
      <img src={vid.channelImage} className="rounded-xl" />
      <div className="text-left flex gap-2 mt-3">
        <img className="w-10 h-10 rounded-full" alt="" src={vid.imageIcon} />
        <div className="info ">
          <h2>{vid.title}</h2>
          <p className="text-[#606060] hover:text-black transition-colors text-sm">
            {vid.channel}
          </p>
          <p className="text-[#606060] hover:text-black transition-colors text-sm">
            {vid.views}
          </p>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  vid: PropTypes.shape({
    title: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    channelImage: PropTypes.string.isRequired,
    imageIcon: PropTypes.string.isRequired,
  }).isRequired,
};
