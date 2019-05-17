package com.douzone.dsproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class index {
	@RequestMapping({"", "/index"})
	public String test() {
		System.out.println("@@@");
		return "index";
	}
	
	@RequestMapping({"/currentassets"})
	public String currentassets() {
		
		return "currentassets";
	}
	
	@RequestMapping({"/documententry"})
	public String documententry() {
		
		return "documententry";
	}
	
	@RequestMapping({"/byperiod"})
	public String byperiod() {
		
		return "byperiod";
	}
}
