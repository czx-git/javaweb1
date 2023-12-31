package com.example.service;

import com.example.Dao.BaikeDao;
import com.example.entity.Baike;
import com.example.entity.Params;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class BaikeService {
    @Resource
    private BaikeDao baikeDao;

    public List<Baike> getBaike() {
        return baikeDao.selectAll();
    }


    public List<Baike> findBySearch1(Params params) {
        return baikeDao.findBySearch1(params);
    }

    public class CustomException extends RuntimeException {
        public CustomException(String message) {
            super(message);
        }
    }
    public void add(Baike baike) {

        if (baike.getTitle() == null || "".equals(baike.getTitle())) {
            throw new CustomException("Title不能为空");
        }
        Baike id = baikeDao.findById(baike.getId());
        if (id != null) {
            // 说明已经有了，这里我们就要提示前台不允许新增了
            throw new CustomException("该id已存在，请更换id");
        }
        baikeDao.insertSelective(baike);
    }
    public void update(Baike baike) {
        baikeDao.updateByPrimaryKeySelective(baike);
    }

    public void delete(Integer id) {
        baikeDao.deleteByPrimaryKey(id);
    }
}
