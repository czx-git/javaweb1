package com.example.controller;

import com.example.common.Result;
import com.example.entity.Baike;
import com.example.entity.Params;
import com.example.service.BaikeService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/baike")
public class Baikecontroller {
    @Resource
    private BaikeService baikeService; // 声明并注入newsService对象



    @GetMapping("/search")
    public Result findBySearch(Params params) {
        List<Baike> list = baikeService.findBySearch1(params);
        return Result.success(list);
    }


    @PostMapping("/save")
    public Result save(@RequestBody Baike baike) {
        if (baike.getId() == null) {
            baikeService.add(baike);
        }
        else {
            baikeService.update(baike);
        }
        return Result.success();
    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id) {
        baikeService.delete(id);
        return Result.success();
    }

}
