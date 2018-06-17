const _ = {}

_.each = (list, cb) => {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      cb(list[i], i, list)
    }
  } else {
    for (let key in list) {
      cb(list[key], key, list)
    }
  }
}

_.map = (list, cb) => {
  let map = []
  _.each(list, (item, index, collection) => {
    map.push(cb(item, index, collection))
  })
  return map
}

_.reduce = (list, iterator, initialValue) => {
  let accumulator = initialValue
  for (let i = 0; i < list.length; i++) {
    accumulator = iterator(accumulator, list[i], i, list)
  }
  return accumulator
}

const numbers = [1, 2, 3, 4]
console.log(_.reduce(numbers, (result, n) => result + n, 0))

const block = [["first", "Sally"], ["last", "Williams"], ["age", 21]]
console.log(
  _.reduce(
    block,
    (h, pair) => {
      h[pair[0]] = pair[1]
      return h
    },
    {},
  ),
)

const article = `Wiki
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
This article is about the type of website. For other uses, see Wiki (disambiguation).
"WikiNode" redirects here. For WikiNode of Wikipedia, see Wikipedia:WikiNode. For the app for the Apple iPad, see WikiNodes.
File:Ward Cunningham, Inventor of the Wiki.webm
Interview with Ward Cunningham, inventor of the wiki
A wiki (/ˈwɪki/ (About this sound listen) WIK-ee) is a website on which users collaboratively modify content and structure directly from the web browser. In a typical wiki, text is written using a simplified markup language and often edited with the help of a rich-text editor.[1]

A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little implicit structure, allowing structure to emerge according to the needs of the users.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are open source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding or removing material. Others may permit access without enforcing access control. Other rules may be imposed to organize content.
The online encyclopedia project Wikipedia is by far the most popular wiki-based website, and is one of the most widely viewed sites of any kind in the world, having been ranked in the top ten since 2007.[3] Wikipedia is not a single wiki but rather a collection of hundreds of wikis, one for each language. There are tens of thousands of other wikis in use, both public and private, including wikis functioning as knowledge management resources, notetaking tools, community websites and intranets. The English-language Wikipedia has the largest collection of articles; as of September 2016, it had over five million articles. Ward Cunningham, the developer of the first wiki software, WikiWikiWeb, originally described it as "the simplest online database that could possibly work".[4] "Wiki" (pronounced [ˈwiki][note 1]) is a Hawaiian word meaning "quick".[5][6][7]`

console.log(
  _.reduce(
    article.split(/[^a-zA-Z]+/),
    (freqTable, word) => {
      if (!freqTable[word]) {
        freqTable[word] = 0
      }
      freqTable[word] += 1
      return freqTable
    },
    {},
  ),
)
