import farmersMeet from '../../public/assets/events-media/farmers_meet.png';
import researchCenter from '../../public/assets/events-media/research_center.png';
import cornFieldDay from '../../public/assets/events-media/corn_field_day.png';
import awardCeremony from '../../public/assets/events-media/award_ceremony.png';
import agTechSeminar from '../../public/assets/events-media/ag_tech_seminar.png';
import seedDistribution from '../../public/assets/events-media/seed_distribution.png';
import futureFarmingThumb from '../../public/assets/events-media/future_farming_thumb.png';
import ramLalThumb from '../../public/assets/events-media/ram_lal_thumb.png';
import corporateFilmThumb from '../../public/assets/events-media/corporate_film_thumb.png';

export const photos = [
    {
        id: 1,
        url: farmersMeet,
        caption: "Annual Farmer Meet 2024",
        location: "Varanasi, UP",
        date: "Nov 15, 2024",
        description: "Over 500 farmers gathered to discuss the latest advancements in sustainable farming and crop yield optimization."
    },
    {
        id: 2,
        url: researchCenter,
        caption: "New Research Center Inauguration",
        location: "Lucknow, UP",
        date: "Oct 02, 2024",
        description: "Inaugurating our state-of-the-art research facility dedicated to developing climate-resilient seed varieties."
    },
    {
        id: 3,
        url: cornFieldDay,
        caption: "Field Demonstration Day",
        location: "Gorakhpur, UP",
        date: "Sep 10, 2024",
        description: "Live demonstration of our new high-yield wheat variety, showing promising results in local soil conditions."
    },
    {
        id: 4,
        url: awardCeremony,
        caption: "Award Ceremony for Best Farmers",
        location: "Prayagraj, UP",
        date: "Aug 15, 2024",
        description: "Recognizing the hard work and innovation of our partner farmers who have achieved record-breaking yields."
    },
    {
        id: 5,
        url: agTechSeminar,
        caption: "Sustainable Ag Tech Seminar",
        location: "Kanpur, UP",
        date: "July 20, 2024",
        description: "Experts from around the globe joined us to discuss the integration of technology in traditional farming practices."
    },
    {
        id: 6,
        url: seedDistribution,
        caption: "Community Seed Distribution",
        location: "Rural Uttar Pradesh",
        date: "June 05, 2024",
        description: "Distributing high-quality seeds to smallholder farmers to ensure food security and improved livelihoods."
    }
];

export const videos = [
    {
        id: 1,
        thumbnail: futureFarmingThumb,
        title: "The Future of Farming",
        duration: "12:30",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        description: "An in-depth look at how modern farming practices are shaping the future of agriculture and preserving soil health."
    },
    {
        id: 2,
        thumbnail: ramLalThumb,
        title: "Success Stories: Ram Lal's Journey",
        duration: "05:45",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        description: "Ram Lal shares his inspiring journey of transforming his small farm into a profitable venture using Devanya seeds."
    },
    {
        id: 3,
        thumbnail: corporateFilmThumb,
        title: "Devanya Agri Science Corporate Film",
        duration: "03:20",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        description: "Get to know Devanya Agri Science, our values, our mission, and the people behind our innovations."
    }
];
