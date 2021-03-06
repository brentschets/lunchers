﻿using GeoCoordinatePortable;
using Lunchers.Models.Domain;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lunchers.Models
{
    public class Lunch
    {
        [Key]
        public int LunchId { get; set; }
        public string Naam { get; set; }
        public double Prijs { get; set; }
        public List<LunchIngredient> LunchIngredienten { get; set; } = new List<LunchIngredient>();
        public string Beschrijving { get; set; }
        public List<Afbeelding> Afbeeldingen { get; set; } = new List<Afbeelding>();
        public DateTime BeginDatum { get; set; }
        public DateTime EindDatum { get; set; }
        public List<LunchTag> LunchTags { get; set; } = new List<LunchTag>();
        public Handelaar Handelaar { get; set; }
        public bool Deleted { get; set; }

        [JsonIgnore]
        public GeoCoordinate GetCoordinate
        {
            get { return new GeoCoordinate(Handelaar.Locatie.Latitude, Handelaar.Locatie.Longitude); }
        }

    }
}
