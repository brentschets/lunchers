﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Lunchers.Models;
using Lunchers.Models.Repositories;
using Lunchers.Models.Domain;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lunchers.Controllers
{
    public class LunchController : Controller
    {
        ILunchRespository _lunchRespository;

        public LunchController(ILunchRespository lunchRespository)
        {
            _lunchRespository = lunchRespository;
        }

        [HttpGet]
        public IEnumerable<Lunch> getAll()
        {
            return _lunchRespository.GetAll();
        }

        [HttpGet]
        public Lunch getById(int id)
        {
            return _lunchRespository.getById(id);
        }

    }
}