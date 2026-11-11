export const campusBuses = [
  {
    id: 'kuet-1',
    campus: 'KUET',
    name: 'কুয়েট ক্যাম্পাস বাস (রুট ১)',
    nameEn: 'KUET Campus Shuttle (Route 1)',
    route: 'সোনাডাঙ্গা ➔ শিববাড়ি ➔ ফুলবাড়িগেট',
    routeEn: 'Sonadanga ➔ Shib Bari ➔ Phulbarigate',
    nextDept: 12,
    status: 'অন-টাইম',
    statusEn: 'On Time',
    seats: '২৪ সিট খালি',
    seatsEn: '24 seats free'
  },
  {
    id: 'ku-1',
    campus: 'খুলনা বিশ্ববিদ্যালয় (KU)',
    name: 'কেইউ ক্যাম্পাস বাস (রুট ৩)',
    nameEn: 'KU Campus Shuttle (Route 3)',
    route: 'গল্লামারী ➔ ময়লাপোতা ➔ সোনাডাঙ্গা',
    routeEn: 'Gollamari ➔ Moylapota ➔ Sonadanga',
    nextDept: 25,
    status: 'বোর্ডিং চলছে',
    statusEn: 'Boarding',
    seats: '৮ সিট খালি',
    seatsEn: '8 seats free'
  },
  {
    id: 'bl-1',
    campus: 'বিএল কলেজ (BL College)',
    name: 'দৌলতপুর শাটল (রুট ২)',
    nameEn: 'Daulatpur Shuttle (Route 2)',
    route: 'রয়্যাল মোড় ➔ ডাকবাংলা ➔ বিএল কলেজ গেট',
    routeEn: 'Royal Mor ➔ Dakbangla ➔ BL College Gate',
    nextDept: 40,
    status: 'শিডিউল্ড',
    statusEn: 'Scheduled',
    seats: 'পর্যাপ্ত সিট',
    seatsEn: 'Seats Available'
  }
];

export const fareMatrix = {
  'shib_bari-sonadanga': { dist: '৩.২ কিমি', fare: 15 },
  'dakbangla-rupsha': { dist: '৪.৫ কিমি', fare: 20 },
  'phulbarigate-sonadanga': { dist: '১০.১ কিমি', fare: 35 },
  'shib_bari-kuet': { dist: '১১.৮ কিমি', fare: 40 },
  'gollamari-shib_bari': { dist: '২.৫ কিমি', fare: 15 }
};