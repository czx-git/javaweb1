package com.example.controller;
import com.example.common.Result;
import com.example.entity.News;
import com.example.entity.Params;
import com.example.service.NewsService;

import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/news")
public class Newscontroller {
    @Resource
    private NewsService newsService; // 声明并注入newsService对象



    @GetMapping("/search")
    public Result findBySearch(Params params) {
        List<News> list = newsService.findBySearch(params);
        return Result.success(list);
    }


    @PostMapping("/save")
    public Result save(@RequestBody News news) {
        if (news.getId() == null) {
            newsService.add(news);
        }
        else {
            newsService.update(news);
        }
        return Result.success();
    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id) {
        newsService.delete(id);
        return Result.success();
    }

}
