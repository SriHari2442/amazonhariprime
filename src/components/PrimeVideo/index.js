import MoviesSlider from '../MoviesSlider'
import PrimeFilter from '../../context/PrimeFilter'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const moviesList = {
  EN: [
    {
      id: '61227099e13958e58d31e74c',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
      categoryId: 'ACTION',
    },
    {
      id: '612271842cad3c2dfcb82481',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
      categoryId: 'COMEDY',
    },
    {
      id: '6122709941329807a4e17b39',
      thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
      categoryId: 'ACTION',
    },
    {
      id: '61227184c889cff17f05900b',
      thumbnailUrl:
        'https://www.opentapes.org/wp-content/uploads/2022/06/Man-vs-Bee-the-review.jpg',
      videoUrl: 'https://youtu.be/Woootqo7Pf4',
      categoryId: 'COMEDY',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A4',
      thumbnailUrl:
        'https://m.media-amazon.com/images/M/MV5BNzBkMTYwYjktMzFlZS00MmNhLTgxNjYtNGEwYjUxYTBlNjM5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
      videoUrl: 'https://youtu.be/E3s-w-G4R_w',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A8',
      thumbnailUrl:
        'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637391.jpg',
      videoUrl: 'https://youtu.be/WbblCMem1ME',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B1',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/d/dc/The_Family_Man.jpeg',
      videoUrl: 'https://youtu.be/NGf_B81Hc2M',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B8',
      thumbnailUrl:
        'https://i.scdn.co/image/ab67616d0000b27384b8a4b6b80188be05cb053c',
      videoUrl: 'https://youtu.be/NG6PUj-TUfY',
      categoryId: 'SERIES',
    },
  ],
  HI: [
    {
      id: '612271846f711783024f2bfa',
      thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
      categoryId: 'COMEDY',
    },
    {
      id: '61227099ce46ed88e7f00c19',
      thumbnailUrl:
        'https://stat2.bollywoodhungama.in/wp-content/uploads/2022/06/Shamshera.jpg',
      videoUrl: 'https://youtu.be/UHYUeZ8JszQ',
      categoryId: 'ACTION',
    },
    {
      id: '612271141bf93653809cdccb',
      thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
      categoryId: 'ACTION',
    },
    {
      id: '612271848b2be0f2f769d24a',
      thumbnailUrl:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202204/Bhool_Bhulaiyaa_2_1650976194.jpeg',
      videoUrl: 'https://youtu.be/P2KRKxAb2ek',
      categoryId: 'COMEDY',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A6',
      thumbnailUrl:
        'https://static.toiimg.com/thumb/msid-54448208,imgsize-54442,width-800,height-600,resizemode-75/54448208.jpg',
      videoUrl: 'https://youtu.be/6L6XqWoS8tw',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A7',
      thumbnailUrl:
        'https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/pinkvilla_picks_5_reasons_why_aamir_khans_dangal_is_perfect_to_binge_on_for_inspiration_amid_lockdown.jpg?itok=wnh3H2yI',
      videoUrl: 'https://youtu.be/x_7YlGv9u1g',
      categoryId: 'BIOPIC',
    },

    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B2',
      thumbnailUrl:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/mirzapur_thumb.jpeg?FDKkc_RBidQNSMawskkTHeTlDIVsNZQt&size=1200:675',
      videoUrl: 'https://youtu.be/xMKzdQrC5TI',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B7',
      thumbnailUrl:
        'https://lehren.com/wp-content/uploads/2022/05/Panchayat-Season-3-Release-Date-Speculations-Plot-More.jpg',
      videoUrl: 'https://youtu.be/mojZJ7oeD_g',
      categoryId: 'SERIES',
    },
  ],
  TE: [
    {
      id: '61227184ae30e00e3ce542c8',
      thumbnailUrl:
        'https://www.pinkvilla.com/imageresize/f3_release_date_1_1.jpg?width=752&format=webp&t=pvorg',
      videoUrl: 'https://youtu.be/3pelriJ6Acs',
      categoryId: 'COMEDY',
    },
    {
      id: '61227184882da0a972890152',
      thumbnailUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91RJWV-jzbL._RI_.jpg',
      videoUrl: 'https://youtu.be/Hgc07_BX4_8',
      categoryId: 'COMEDY',
    },
    {
      id: '6122709931ad5e69f5125806',
      thumbnailUrl:
        'https://www.rbollywood.com/wp-content/uploads/2022/03/RRR-Movie-30-interesting-facts-that-you-must-know-as-Rajamoulis-fan-10-1024x631.webp',
      videoUrl: 'https://youtu.be/NgBoMJy386M',
      categoryId: 'ACTION',
    },
    {
      id: '61227114b7b5232771c68883',
      thumbnailUrl:
        'https://images.indianexpress.com/2021/12/Akhanda-poster-1200by667.jpg',
      videoUrl: 'https://youtu.be/CWnu8pQRCkQ',
      categoryId: 'ACTION',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A1',
      thumbnailUrl:
        'https://m.media-amazon.com/images/S/pv-target-images/4e7f07a9b9a4027bd2c1db2832be89e62784d0f8a495f2f58e3792a5361ff660._UR1920,1080_.jpg',
      videoUrl: 'https://youtu.be/POlqwyqbAH4',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A5',
      thumbnailUrl: 'https://static.toiimg.com/photo/91472083.jpeg',
      videoUrl: 'https://youtu.be/LbTN2dOJcbQ',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B4',
      thumbnailUrl:
        'https://pbs.twimg.com/media/FV1iGq4akAARBqx?format=jpg&name=900x900',
      videoUrl: 'https://youtu.be/Vq6LO3i6i8c',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B5',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/a/a7/Mumbai_Diaries_26_11.jpg',
      videoUrl: 'https://youtu.be/jOctqKM5dW4',
      categoryId: 'SERIES',
    },
  ],
  TA: [
    {
      id: '6122718418ae122e517c3ada',
      thumbnailUrl: 'https://images.indianexpress.com/2022/05/don-siva.jpg',
      videoUrl: 'https://youtu.be/s5ak-NY6OC8',
      categoryId: 'COMEDY',
    },
    {
      id: '61227184c7ac22c8258938c5',
      thumbnailUrl:
        'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Doctor_Ramzan_release_110321_1200_screengrab.jpg?itok=g9nIO7Yc',
      videoUrl: 'https://youtu.be/oQiH_Iw0kDs',
      categoryId: 'COMEDY',
    },

    {
      id: '61227099d3c5b18801b2edb5',
      thumbnailUrl:
        'https://newindian.in/wp-content/uploads/2022/04/Untitled-design-46-929x531.png',
      videoUrl: 'https://youtu.be/jQsE85cI384',
      categoryId: 'ACTION',
    },

    {
      id: '61227099ea52349bd1e16ee4',
      thumbnailUrl: 'https://pbs.twimg.com/media/FS2kVctaIAET5tB.jpg:large',
      videoUrl: 'https://youtu.be/OKBMCL-frPU',
      categoryId: 'ACTION',
    },

    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A2',
      thumbnailUrl:
        'https://www.pinkvilla.com/imageresize/jai_bhim_out_of_oscar.jpg?width=752&format=webp&t=pvorg',
      videoUrl: 'https://youtu.be/Gc6dEDnL8JA',
      categoryId: 'BIOPIC',
    },

    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A3',
      thumbnailUrl:
        'https://gumlet.assettype.com/swarajya%2F2020-11%2F3ad8ec93-097f-4fd6-94b1-671d4c532895%2Fsoo.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
      videoUrl: 'https://youtu.be/fa_DIwRsa9o',
      categoryId: 'BIOPIC',
    },

    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B3',
      thumbnailUrl:
        'https://images.justwatch.com/poster/285260522/s718/season-1.%7Bformat%7D',
      videoUrl: 'https://youtu.be/b2xE68VEjUs',
      categoryId: 'SERIES',
    },

    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B6',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/0/0a/Breathe_Into_The_Shadows_Poster.jpeg',
      videoUrl: 'https://youtu.be/nxE-k2MLQIA',
      categoryId: 'SERIES',
    },
  ],
  All: [
    {
      id: '61227099e13958e58d31e74c',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
      categoryId: 'ACTION',
    },
    {
      id: '61227099ce46ed88e7f00c19',
      thumbnailUrl:
        'https://stat2.bollywoodhungama.in/wp-content/uploads/2022/06/Shamshera.jpg',
      videoUrl: 'https://youtu.be/UHYUeZ8JszQ',
      categoryId: 'ACTION',
    },
    {
      id: '612271842cad3c2dfcb82481',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
      categoryId: 'COMEDY',
    },
    {
      id: '6122709941329807a4e17b39',
      thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
      categoryId: 'ACTION',
    },
    {
      id: '61227184c889cff17f05900b',
      thumbnailUrl:
        'https://www.opentapes.org/wp-content/uploads/2022/06/Man-vs-Bee-the-review.jpg',
      videoUrl: 'https://youtu.be/Woootqo7Pf4',
      categoryId: 'COMEDY',
    },
    {
      id: '612271846f711783024f2bfa',
      thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
      categoryId: 'COMEDY',
    },
    {
      id: '612271141bf93653809cdccb',
      thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
      videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
      categoryId: 'ACTION',
    },
    {
      id: '61227184c7ac22c8258938c5',
      thumbnailUrl:
        'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Doctor_Ramzan_release_110321_1200_screengrab.jpg?itok=g9nIO7Yc',
      videoUrl: 'https://youtu.be/oQiH_Iw0kDs',
      categoryId: 'COMEDY',
    },
    {
      id: '61227184ae30e00e3ce542c8',
      thumbnailUrl:
        'https://www.pinkvilla.com/imageresize/f3_release_date_1_1.jpg?width=752&format=webp&t=pvorg',
      videoUrl: 'https://youtu.be/3pelriJ6Acs',
      categoryId: 'COMEDY',
    },
    {
      id: '6122718418ae122e517c3ada',
      thumbnailUrl: 'https://images.indianexpress.com/2022/05/don-siva.jpg',
      videoUrl: 'https://youtu.be/s5ak-NY6OC8',
      categoryId: 'COMEDY',
    },

    {
      id: '612271848b2be0f2f769d24a',
      thumbnailUrl:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202204/Bhool_Bhulaiyaa_2_1650976194.jpeg',
      videoUrl: 'https://youtu.be/P2KRKxAb2ek',
      categoryId: 'COMEDY',
    },
    {
      id: '61227184882da0a972890152',
      thumbnailUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91RJWV-jzbL._RI_.jpg',
      videoUrl: 'https://youtu.be/Hgc07_BX4_8',
      categoryId: 'COMEDY',
    },
    {
      id: '6122709931ad5e69f5125806',
      thumbnailUrl:
        'https://www.rbollywood.com/wp-content/uploads/2022/03/RRR-Movie-30-interesting-facts-that-you-must-know-as-Rajamoulis-fan-10-1024x631.webp',
      videoUrl: 'https://youtu.be/NgBoMJy386M',
      categoryId: 'ACTION',
    },
    {
      id: '61227099d3c5b18801b2edb5',
      thumbnailUrl:
        'https://newindian.in/wp-content/uploads/2022/04/Untitled-design-46-929x531.png',
      videoUrl: 'https://youtu.be/jQsE85cI384',
      categoryId: 'ACTION',
    },
    {
      id: '61227114b7b5232771c68883',
      thumbnailUrl:
        'https://images.indianexpress.com/2021/12/Akhanda-poster-1200by667.jpg',
      videoUrl: 'https://youtu.be/CWnu8pQRCkQ',
      categoryId: 'ACTION',
    },
    {
      id: '61227099ea52349bd1e16ee4',
      thumbnailUrl: 'https://pbs.twimg.com/media/FS2kVctaIAET5tB.jpg:large',
      videoUrl: 'https://youtu.be/OKBMCL-frPU',
      categoryId: 'ACTION',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A1',
      thumbnailUrl:
        'https://m.media-amazon.com/images/S/pv-target-images/4e7f07a9b9a4027bd2c1db2832be89e62784d0f8a495f2f58e3792a5361ff660._UR1920,1080_.jpg',
      videoUrl: 'https://youtu.be/POlqwyqbAH4',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A2',
      thumbnailUrl:
        'https://www.pinkvilla.com/imageresize/jai_bhim_out_of_oscar.jpg?width=752&format=webp&t=pvorg',
      videoUrl: 'https://youtu.be/Gc6dEDnL8JA',
      categoryId: 'BIOPIC',
    },

    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A3',
      thumbnailUrl:
        'https://gumlet.assettype.com/swarajya%2F2020-11%2F3ad8ec93-097f-4fd6-94b1-671d4c532895%2Fsoo.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
      videoUrl: 'https://youtu.be/fa_DIwRsa9o',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A4',
      thumbnailUrl:
        'https://m.media-amazon.com/images/M/MV5BNzBkMTYwYjktMzFlZS00MmNhLTgxNjYtNGEwYjUxYTBlNjM5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
      videoUrl: 'https://youtu.be/E3s-w-G4R_w',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A5',
      thumbnailUrl: 'https://static.toiimg.com/photo/91472083.jpeg',
      videoUrl: 'https://youtu.be/LbTN2dOJcbQ',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A6',
      thumbnailUrl:
        'https://static.toiimg.com/thumb/msid-54448208,imgsize-54442,width-800,height-600,resizemode-75/54448208.jpg',
      videoUrl: 'https://youtu.be/6L6XqWoS8tw',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A7',
      thumbnailUrl:
        'https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/pinkvilla_picks_5_reasons_why_aamir_khans_dangal_is_perfect_to_binge_on_for_inspiration_amid_lockdown.jpg?itok=wnh3H2yI',
      videoUrl: 'https://youtu.be/x_7YlGv9u1g',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300A8',
      thumbnailUrl:
        'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637391.jpg',
      videoUrl: 'https://youtu.be/WbblCMem1ME',
      categoryId: 'BIOPIC',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B1',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/d/dc/The_Family_Man.jpeg',
      videoUrl: 'https://youtu.be/NGf_B81Hc2M',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B2',
      thumbnailUrl:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/mirzapur_thumb.jpeg?FDKkc_RBidQNSMawskkTHeTlDIVsNZQt&size=1200:675',
      videoUrl: 'https://youtu.be/xMKzdQrC5TI',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B3',
      thumbnailUrl:
        'https://images.justwatch.com/poster/285260522/s718/season-1.%7Bformat%7D',
      videoUrl: 'https://youtu.be/b2xE68VEjUs',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B4',
      thumbnailUrl:
        'https://pbs.twimg.com/media/FV1iGq4akAARBqx?format=jpg&name=900x900',
      videoUrl: 'https://youtu.be/Vq6LO3i6i8c',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B5',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/a/a7/Mumbai_Diaries_26_11.jpg',
      videoUrl: 'https://youtu.be/jOctqKM5dW4',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B6',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/0/0a/Breathe_Into_The_Shadows_Poster.jpeg',
      videoUrl: 'https://youtu.be/nxE-k2MLQIA',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B7',
      thumbnailUrl:
        'https://lehren.com/wp-content/uploads/2022/05/Panchayat-Season-3-Release-Date-Speculations-Plot-More.jpg',
      videoUrl: 'https://youtu.be/mojZJ7oeD_g',
      categoryId: 'SERIES',
    },
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac1300B8',
      thumbnailUrl:
        'https://i.scdn.co/image/ab67616d0000b27384b8a4b6b80188be05cb053c',
      videoUrl: 'https://youtu.be/NG6PUj-TUfY',
      categoryId: 'SERIES',
    },
  ],
}

const PrimeVideo = () => {
  const getPlaytimeData = activeLanguage => {
    switch (activeLanguage) {
      case 'EN':
        return moviesList.EN
      case 'HI':
        return moviesList.HI
      case 'TE':
        return moviesList.TE
      case 'TA':
        return moviesList.TA
      case 'All':
        return moviesList.All
      default:
        return null
    }
  }

  const langOptions = [
    {id: 1, value: 'All', language: 'All'},
    {id: 2, value: 'EN', language: 'English'},
    {id: 3, value: 'HI', language: 'हिंदी'},
    {id: 4, value: 'TE', language: 'తెలుగు'},
    {id: 5, value: 'TA', language: 'தமிழ்'},
  ]
  return (
    <PrimeFilter.Consumer>
      {value => {
        const {activeLanguage, changeLanguage} = value

        const onChangeLanguage = event => {
          changeLanguage(event.target.value)
        }
        const FilterList = getPlaytimeData(activeLanguage)

        const actionList = FilterList.filter(
          movie => movie.categoryId === actionMovie,
        )
        const biopicList = FilterList.filter(
          movie => movie.categoryId === 'BIOPIC',
        )
        const seriesList = FilterList.filter(
          movie => movie.categoryId === 'SERIES',
        )

        const comedyList = FilterList.filter(
          movie => movie.categoryId === comedyMovie,
        )
        return (
          <div className="prime-video-container">
            <img
              className="image"
              src="https://www.leparisien.fr/resizer/ip8ACPxHsXM2F-FSjPXBY9J0GvE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/LHR7AUQR33DW2WP4ERPVTJJOSE.jpg"
              alt="prime video"
            />

            <nav className="nav-header">
              <h1 className="movies-heading">Language</h1>
              <select
                className="language-dropdown"
                value={activeLanguage}
                onChange={onChangeLanguage}
              >
                {langOptions.map(eachOption => (
                  <option key={eachOption.id} value={eachOption.value}>
                    {eachOption.language}
                  </option>
                ))}
              </select>
            </nav>
            <div className="movies-container">
              <h1 className="movies-heading">Biography</h1>
              <MoviesSlider moviesList={biopicList} />
              <h1 className="movies-heading">Comedy Movies </h1>
              <MoviesSlider moviesList={comedyList} />
              <h1 className="movies-heading">Prime Originals </h1>
              <MoviesSlider moviesList={seriesList} />
              <h1 className="movies-heading">Action Movies</h1>
              <MoviesSlider moviesList={actionList} />
            </div>
          </div>
        )
      }}
    </PrimeFilter.Consumer>
  )
}

export default PrimeVideo
