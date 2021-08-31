/* eslint-disable */
var gulp = require('gulp')
var tap = require('gulp-tap')
var fs = require('fs')

const SOURCE_PATH = './src'
const DEST_PATH = './dist'

function copyAppJson() {
  return gulp.src(`${SOURCE_PATH}/app.json`)
    .pipe(tap(function(_, t) {
      return t.through(gulp.dest, [DEST_PATH])
    }))
}

function copyAssets () {
  const getSrcPath = (path) => {
    return SOURCE_PATH + (path.startsWith('/') ? path : ('/' + path))
  }
  const appJson = JSON.parse(fs.readFileSync(`${SOURCE_PATH}/app.json`, 'utf-8'));
  let assetsPath = []
  if (appJson.appIconPath) {
    assetsPath.push(getSrcPath(appJson.appIconPath))
  }
  if (appJson.previewImages && appJson.previewImages.length > 0) {
    const previewAssets = appJson.previewImages.reduce((res, cur) => {
      res.push(getSrcPath(cur))
      return res
    }, [])
    assetsPath = assetsPath.concat(previewAssets)
  }
  if (appJson.tabBar && appJson.tabBar.list && appJson.tabBar.list.length > 0) {
    const tabAssets = appJson.tabBar.list.reduce((res, cur) => {
      if (cur.iconPath && cur.iconPath.length > 0) {
        res.push(getSrcPath(cur.iconPath))
      }
      if (cur.selectedIconPath && cur.selectedIconPath.length > 0) {
        res.push(getSrcPath(cur.selectedIconPath))
      }
      return res
    }, [])
    assetsPath = assetsPath.concat(tabAssets)
  }
  return gulp.src(assetsPath).pipe(gulp.dest(`${DEST_PATH}/assets`))
}

/////////////////// assets/Images ///////////////////////////////////
function copyImageJson() {
  return gulp.src(`${SOURCE_PATH}/assets/images/**/*`)
    .pipe(tap(function(_, t) {
      return t.through(gulp.dest, [`${DEST_PATH}/${assetsDir}/images`])
    }))
}
/////////////////// assets/Icon ///////////////////////////////////
function copyIconsJson() {
  return gulp.src(`${SOURCE_PATH}/assets/icons/*`)
    .pipe(tap(function(_, t) {
      return t.through(gulp.dest, [`${DEST_PATH}/${assetsDir}/icons`])
    }))
}
/////////////////// assets/Json ///////////////////////////////////
function copyCommJson() {
  return gulp.src(`${SOURCE_PATH}/assets/*.json`)
    .pipe(tap(function(_, t) {
      return t.through(gulp.dest, [`${DEST_PATH}/${assetsDir}`])
    }))
}
/////////////////// assets/js ///////////////////////////////////
function copyCommJs() {
  return gulp.src(`${SOURCE_PATH}/assets/*.js`)
    .pipe(tap(function(_, t) {
      return t.through(gulp.dest, [`${DEST_PATH}/${assetsDir}`])
    }))
}

gulp.task('default', gulp.parallel(copyAppJson, copyAssets, copyImageJson, copyIconsJson, copyCommJs, copyCommJson))
