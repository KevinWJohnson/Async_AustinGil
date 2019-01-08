const root = 'http://jsonplaceholder.typicode.com'
const request = require('request')
const options = { json: true }

/**
 * Original Code
 */
function getPhoto(photoId, callback) {
  request(`${root}/photos/${photoId}`, options, (error, response) => {
    if (error) {
      return callback(error);
    }
    callback(null, response.body);
  });
}
function getAlbum(albumId, callback) {
  request(`${root}/albums/${albumId}`, options, (error, response) => {
    if (error) {
      return callback(error);
    }
    callback(null, response.body);
  });
}
function getUser(userId, callback) {
  request(`${root}/users/${userId}`, options, (error, response) => {
    if (error) {
      return callback(error);
    }
    callback(null, response.body);
  });
}

// Get user information based on a photo ID
// function run(photoId = 3) {
//   getPhotoPr(photo => {

//   })
  // getPhoto(photoId, (error, photo) => {
  //   if(error) {
  //     // handle error
  //   } else {
  //     console.log('The photo details are:')
  //     console.log(photo)
      
  //     getAlbum(photo.albumId, (error, album) => {
  //       if(error) {
  //         // handle error
  //       } else {
  //         console.log('The album details are:')
  //         console.log(album)

  //         getUser(album.userId, (error, user) => {
  //           if(error) {
  //             // handle error
  //           } else {
  //             console.log('The user details are:')
  //             console.log(user)
  //           }
  //         })
  //       }
  //     })
  //   }
  // })
// }








/**
 * Refactored
 */
function getPhotoPr(photoId) {
  return new Promise((resolve, reject) => {
    getPhoto(photoId, (error, photo) => {
      if(error) {
        return reject(error)
      }
      resolve(photo)
    })
  })
}
function getAlbumPr(albumId) {
  return new Promise((resolve, reject) => {
    getAlbum(albumId, (error, album) => {
      if(error) {
        return reject(error)
      }
      resolve(album)
    })
  })
}
function getUserPr(userId) {
  return new Promise((resolve, reject) => {
    getUser(userId, (error, user) => {
      if(error) {
        return reject(error)
      }
      resolve(user)
    })
  })
}
// Get user information based on a photo ID
async function run(photoId = 3, userId = 1) {
  try {
    // const photo = await getPhotoPr(photoId)
    // // wait for it....
    // const user = await getUserPr(userId)

    const [photoDeet, userDeets] = await Promise.all([
      getPhotoPr(photoId),
      getUserPr(userId)
    ])
    
    console.log(photoDeets, userDeets)

  } catch (error) {
    // handle error
  }
}

module.exports = run