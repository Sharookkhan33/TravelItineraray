import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  itineraries = [
    {
      id: 1,
      country: 'India',
      place: 'Kerala',
      food: 'Veg',
      activities: ['Boating', 'Trekking'],
      hotelType: '3 Star',
      nights: 3,
      flightCharges: 8000,
      totalCost: 25000,
      image: 'https://wallpapercave.com/wp/wp2649847.jpg',
      description: 'Experience the lush greenery and serene backwaters of Kerala.'
    },
    {
      id: 2,
      country: 'Thailand',
      place: 'Phuket',
      food: 'Both',
      activities: ['Snorkeling', 'Island Tour'],
      hotelType: '4 Star',
      nights: 4,
      flightCharges: 12000,
      totalCost: 40000,
      image: 'https://mcwtravel.com/wp-content/uploads/2022/11/Phuket-Thailand-Beach-1024x536-1.jpeg',
      description: 'Relax on the beautiful beaches and enjoy island hopping adventures.'
    },
    {
      id: 3,
      country: 'France',
      place: 'Paris',
      food: 'Non-Veg',
      activities: ['Sightseeing', 'Museum Tours'],
      hotelType: '5 Star',
      nights: 5,
      flightCharges: 30000,
      totalCost: 90000,
      image: 'https://tse1.explicit.bing.net/th/id/OIP.LjsXuuso9sdcMgElme7Y3AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Explore the romantic city of lights, iconic landmarks, and world-class cuisine.'
    },
        {
      id: 4, country: 'Italy', place: 'Rome', food: 'Both',
      activities: ['Historical Sites', 'Cuisine Tasting'], hotelType: '4 Star',
      nights: 5, flightCharges: 38000, totalCost: 130000,
      image: 'https://a.cdn-hotels.com/gdcs/production110/d737/79d01da7-3020-4b44-9f2d-045801e4ba55.jpg',
      description: 'Walk through ancient ruins and savor Italian flavors.'
    },
    {
      id: 5, country: 'Australia', place: 'Sydney', food: 'Both',
      activities: ['Harbour Tour', 'Beach Day'], hotelType: '4 Star',
      nights: 6, flightCharges: 62000, totalCost: 170000,
      image: 'https://www.earthsattractions.com/wp-content/uploads/2018/08/sydney_opera-unsplash.jpg',
      description: 'Visit the famous Opera House and beaches.'
    },
    {
      id: 6, country: 'Canada', place: 'Vancouver', food: 'Both',
      activities: ['Nature Tour', 'City Walk'], hotelType: '4 Star',
      nights: 6, flightCharges: 57000, totalCost: 155000,
      image: 'https://www.tripsavvy.com/thmb/7lCrHif-rIi4Eol6te3DE6ukbJE=/2121x1414/filters:fill(auto,1)/GettyImages-534612574-5b11609743a10300368c9314.jpg',
      description: 'Explore nature and cosmopolitan culture.'
    },
    {
      id: 7, country: 'Spain', place: 'Barcelona', food: 'Both',
      activities: ['Beach Day', 'Architecture Tour'], hotelType: '4 Star',
      nights: 6, flightCharges: 40000, totalCost: 140000,
      image: 'https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg',
      description: 'Vibrant culture and Gaudí landmarks.'
    },
    {
      id: 8, country: 'Greece', place: 'Santorini', food: 'Both',
      activities: ['Sunset Cruise', 'Wine Tasting'], hotelType: '4 Star',
      nights: 5, flightCharges: 45000, totalCost: 150000,
      image: 'https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg',
      description: 'Romantic island views and sunsets.'
    },
    {
      id: 9, country: 'UAE', place: 'Dubai', food: 'Both',
      activities: ['Desert Safari', 'Sky Views'], hotelType: '5 Star',
      nights: 5, flightCharges: 42000, totalCost: 165000,
      image: 'https://img.veenaworld.com/wp-content/uploads/2022/02/Dubai.jpg',
      description: 'Luxury city with modern wonders.'
    },
    {
      id: 10, country: 'Thailand', place: 'Bangkok', food: 'Both',
      activities: ['Temple Visits', 'Night Market'], hotelType: '4 Star',
      nights: 5, flightCharges: 30000, totalCost: 115000,
      image: 'https://www.tripsavvy.com/thmb/ZtwK0eWCSDo4DQjEGi-IupGJ2I0=/5472x3648/filters:no_upscale():max_bytes(150000):strip_icc()/wat-arun-temple-bangkok-5c461eee46e0fb00016fe445.jpg',
      description: 'Cultural experiences with vibrant markets.'
    },
    {
      id: 11, country: 'Brazil', place: 'Rio de Janeiro', food: 'Both',
      activities: ['Beach Carnival', 'City Tour'], hotelType: '4 Star',
      nights: 6, flightCharges: 61000, totalCost: 155000,
      image: 'https://th.bing.com/th/id/R.58c7cd07743a65337c18c919bcaa1fc5?rik=TJqBfegI01c7Gw&riu=http%3a%2f%2fwww.getsready.com%2fwp-content%2fuploads%2f2016%2f08%2fRio-de-Janeiro-an-amazing-part-in-brazil.jpg&ehk=Dx7YdRlKPvbF%2fRsGg%2fGXOhSNQyYcyiqFKpqr7IoS3s8%3d&risl=&pid=ImgRaw&r=0',
      description: 'Carnival city with famous beaches.'
    },
    {
      id: 12, country: 'Germany', place: 'Berlin', food: 'Both',
      activities: ['History Tour', 'Museum Visits'], hotelType: '4 Star',
      nights: 5, flightCharges: 39000, totalCost: 125000,
      image: 'https://pointstravels.com/wp-content/uploads/2019/05/Berlin-museum-island.jpg',
      description: 'Rich history and modern culture.'
    },
    {
      id: 13, country: 'Japan', place: 'Kyoto', food: 'Both',
      activities: ['Temple Tour', 'Tea Ceremony'], hotelType: '4 Star',
      nights: 5, flightCharges: 54000, totalCost: 148000,
      image: 'https://www.tripsavvy.com/thmb/ev0007c95KFudpJxlJjcbthkWbM=/2121x1414/filters:fill(auto,1)/GettyImages-530105220-5c337bae46e0fb00012fcdfb.jpg',
      description: 'Traditional temples and serene culture.'
    },
    {
      id: 14, country: 'Switzerland', place: 'Zurich', food: 'Both',
      activities: ['Mountain Views', 'Lake Day'], hotelType: '4 Star',
      nights: 6, flightCharges: 58000, totalCost: 160000,
      image: 'https://youimg1.tripcdn.com/target/100o1f000001gp4xq5AB4.jpg',
      description: 'Alpine scenery and lakeside charm.'
    },
    {
      id: 15, country: 'Netherlands', place: 'Amsterdam', food: 'Both',
      activities: ['Canal Tour', 'Museum Visit'], hotelType: '4 Star',
      nights: 5, flightCharges: 41000, totalCost: 135000,
      image: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_1040638333.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=20&dpr=5',
      description: 'Canals, culture, and historic charm.'
    },
    {
  id: 16,
  country: 'UAE',
  place: 'Dubai',
  description: 'Family-friendly Dubai experience.',
  food: 'Veg',
  activities: ['Burj Khalifa', 'Desert Safari', 'Dhow Cruise'],
  hotelType: '4-Star Hotel',
  nights: 4,
  flightCharges: 30000,
  totalCost: 110000,
  image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Night-Burj-Khalifa-Tower-Dubai-Wallpaper-1680x1050.jpg'},
  {
  id: 17,
  country: 'UAE',
  place: 'Dubai',
  description: 'Luxury Dubai shopping and skydive experience.',
  food: 'Both',
  activities: ['Burj Khalifa', 'Luxury Yacht', 'Mall Tour'],
  hotelType: '5-Star Hotel',
  nights: 5,
  flightCharges: 30000,
  totalCost: 160000,
  image: 'https://www.squareyards.ae/blog/wp-content/uploads/2022/11/skydive-in-dubai.jpg'
},{
  id: 18,
  country: 'Indonesia',
  place: 'Bali',
  description: 'Relaxing Bali trip on a budget.',
  food: 'Veg',
  activities: ['Beach Visit', 'Temple Tour'],
  hotelType: '3-Star Resort',
  nights: 4,
  flightCharges: 35000,
  totalCost: 90000,
  image: 'https://faro.travel/blog/wp-content/uploads/2018/03/shutterstock_599071352-1-e1520398909243.jpg'
},
{
  id: 19,
  country: 'Indonesia',
  place: 'Bali',
  description: 'Luxury villa stay with private experiences.',
  food: 'Both',
  activities: ['Private Villa', 'Spa', 'Island Tour'],
  hotelType: '5-Star Villa',
  nights: 6,
  flightCharges: 35000,
  totalCost: 170000,
  image: 'https://tse1.mm.bing.net/th/id/OIP.uAgU8HEP7LJmDvNJv-ThbAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
},{
  id: 3,
  country: 'France',
  place: 'Paris',
  description: 'Luxury honeymoon-style Paris vacation.',
  food: 'Both',
  activities: ['Private City Tour', 'Eiffel Dinner', 'Versailles Palace'],
  hotelType: '5-Star Hotel',
  nights: 5,
  flightCharges: 45000,
  totalCost: 175000,
  image: 'https://www.peninsula.com/-/media/images/the-peninsula-hotels/top-carousel/peninsula-paris-exterior.jpg'
}

  ];

  getItineraries() {
    return this.itineraries;
  }
}

